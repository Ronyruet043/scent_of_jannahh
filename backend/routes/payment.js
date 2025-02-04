import SSLCommerzPayment from "sslcommerz-lts";
import express from "express";
const router = express.Router();

const store_id = process.env.store_id;
const store_passwd = process.env.store_passwd;
const is_live = false;

router.post("/init", async (req, res) => {
  try {
    const { totalPrice } = req.body;
    
    if (!totalPrice) {
      return res.status(400).json({ error: "Total price is required" });
    }

    const tran_id = Date.now().toString();
    const data = {
      total_amount: totalPrice,
      currency: "BDT",
      tran_id: tran_id,
      success_url: "http://localhost:3000/sslcommerz/success",
      fail_url: "http://localhost:3000/sslcommerz/error",
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: "Computer.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: "customer@example.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data);
    
    if (apiResponse && apiResponse.GatewayPageURL) {
      res.json({ url: apiResponse.GatewayPageURL });
    } else {
      throw new Error("Failed to get gateway URL");
    }
  } catch (error) {
    console.error("SSLCommerz Initialization Error:", error);
    res.status(500).json({ error: "Payment initialization failed" });
  }
});

export default router;