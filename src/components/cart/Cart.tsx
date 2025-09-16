"use client";

import Image from "next/image";

export default function Cart() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Your Cart</h1>
        <button className="bg-[#ffa200] text-white px-4 py-2 rounded shadow hover:bg-[#e59400] transition">
          Download Invoice
        </button>
      </div>

      {/* Cart Items Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-primary">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Item 1 */}
            <tr className="border-t">
              <td className="px-4 py-3 flex items-center gap-3">
                <Image
                  src="https://picsum.photos/id/101/200/200"
                  alt="iPhone 14 Pro"
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <span className="font-medium">iPhone 14 Pro</span>
              </td>
              <td className="px-4 py-3">$999</td>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">$999</td>
            </tr>

            {/* Example Item 2 */}
            <tr className="border-t">
              <td className="px-4 py-3 flex items-center gap-3">
                <Image
                  src="https://picsum.photos/id/102/200/200"
                  alt="Wireless Headphones"
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <span className="font-medium">Wireless Headphones</span>
              </td>
              <td className="px-4 py-3">$199</td>
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">$398</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="flex justify-end mt-6">
        <div className="bg-white shadow rounded-lg p-6 w-full sm:w-1/3">
          <h2 className="text-lg font-semibold text-primary mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>$1,397</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between text-base font-bold border-t pt-2">
            <span>Total</span>
            <span>$1,417</span>
          </div>
          <button className="w-full mt-4 bg-[#ffa200] text-white py-2 rounded hover:bg-[#e59400] transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
