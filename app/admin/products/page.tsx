"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useAdmin } from "@/lib/admin-context";
import { CATEGORY_LABELS } from "@/lib/constants";

export default function AdminProductsPage() {
  const { products, updateProduct } = useAdmin();

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      <div>
        <h1 className="font-display text-2xl font-semibold text-gray-900">Products</h1>
        <p className="text-sm text-gray-500 mt-1">
          {products.length} TXT Products · Changes saved locally until database integration
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 font-medium text-gray-500">Product</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500 hidden sm:table-cell">Category</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Price</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Stock</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-brand-cream shrink-0">
                        <Image src={product.image} alt="" fill sizes="40px" className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium truncate max-w-[160px] sm:max-w-none">{product.name}</p>
                        <Badge variant="gold" className="mt-0.5">TXT Product</Badge>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                    {CATEGORY_LABELS[product.category]}
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      step="0.01"
                      value={product.price}
                      onChange={(e) =>
                        updateProduct(product.id, { price: parseFloat(e.target.value) || 0 })
                      }
                      className="w-20 rounded-lg border border-gray-200 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.stockCount}
                      onChange={(e) =>
                        updateProduct(product.id, {
                          stockCount: parseInt(e.target.value) || 0,
                          inStock: parseInt(e.target.value) > 0,
                        })
                      }
                      className="w-16 rounded-lg border border-gray-200 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        updateProduct(product.id, { inStock: !product.inStock })
                      }
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        product.inStock
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
