// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useRef } from "react";
import "./App.css";
import PWABadge from "./PWABadge.tsx";
import html2canvas from "html2canvas";

function App() {
  const handleClick = () => {
    alert("v3");
  };

  const buyersReceiptRef = useRef(null);

  const sellersReceiptRef = useRef(null);

  // Demo data
  const receiptData = {
    transactionId: "TX123456789",
    date: new Date().toLocaleString(),
    buyer: {
      name: "John Doe",
      address: "123 Buyer Street",
      phone: "(555) 123-4567",
    },
    seller: {
      name: "ABC Electronics Store",
      address: "456 Seller Avenue",
      phone: "(555) 987-6543",
      taxId: "TAX123456789",
    },
    items: [
      { name: "Laptop", price: 999.99, quantity: 1 },
      { name: "Mouse", price: 29.99, quantity: 2 },
      { name: "Keyboard", price: 59.99, quantity: 1 },
    ],
  };

  // Calculate totals
  const subtotal = receiptData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const printDoc = async () => {
    // Handle buyers receipt
    if (buyersReceiptRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      buyersReceiptRef.current.classList.remove("displaynone");

      try {
        const canvas = await html2canvas(buyersReceiptRef.current, {
          scale: 2,
        });
        const base64Image = canvas.toDataURL("image/png").split(",")[1];
        console.log(base64Image);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Android.SaveReceipt(base64Image);
      } catch (error) {
        console.error("Error generating buyers receipt:", error);
      }
    }

    // Handle sellers receipt after delay
    setTimeout(async () => {
      if (buyersReceiptRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        buyersReceiptRef.current.classList.add("displaynone");
      }

      if (sellersReceiptRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sellersReceiptRef.current.classList.remove("displaynone");

        try {
          const canvas = await html2canvas(sellersReceiptRef.current, {
            scale: 2,
          });
          const base64Image2 = canvas.toDataURL("image/png").split(",")[1];
          console.log(base64Image2);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Android.SaveReceipt(base64Image2);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          sellersReceiptRef.current.classList.add("displaynone");
        } catch (error) {
          console.error("Error generating sellers receipt:", error);
        }
      }
    }, 20000);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Receipt = ({ type, reference }) => (
    <div ref={reference} className={`receipt ${type}Receipt displaynone`}>
      <div className="receipt-content">
        <h2>{receiptData.seller.name}</h2>
        <p>{receiptData.seller.address}</p>
        <p>Phone: {receiptData.seller.phone}</p>
        <p>Tax ID: {receiptData.seller.taxId}</p>

        <div className="receipt-divider"></div>

        <p>Transaction ID: {receiptData.transactionId}</p>
        <p>Date: {receiptData.date}</p>

        <div className="receipt-divider"></div>

        <h3>
          {type === "buyers" ? "Customer Information" : "Seller Information"}
        </h3>
        <p>
          Name:{" "}
          {type === "buyers" ? receiptData.buyer.name : receiptData.seller.name}
        </p>
        <p>
          Address:{" "}
          {type === "buyers"
            ? receiptData.buyer.address
            : receiptData.seller.address}
        </p>
        <p>
          Phone:{" "}
          {type === "buyers"
            ? receiptData.buyer.phone
            : receiptData.seller.phone}
        </p>

        <div className="receipt-divider"></div>

        <h3>Items</h3>
        <table className="items-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {receiptData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="receipt-totals">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (10%): ${tax.toFixed(2)}</p>
          <p className="total">Total: ${total.toFixed(2)}</p>
        </div>

        <div className="receipt-footer">
          <p>Thank you for your business!</p>
          <p>Copy: {type === "buyers" ? "Customer Copy" : "Merchant Copy"}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="receipt-container">
        <button onClick={printDoc} className="print-button">
          Print Receipts
        </button>
        <Receipt type="buyers" reference={buyersReceiptRef} />
        <Receipt type="sellers" reference={sellersReceiptRef} />
      </div>
      <button onClick={handleClick}>v3</button>
      <PWABadge />
    </div>
  );
}

export default App;
