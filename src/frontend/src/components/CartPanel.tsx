import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useEffect } from 'react';

export default function CartPanel() {
  const { items, removeItem, updateItemQuantity, isCartOpen, toggleCart, subtotal } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  const handleCheckout = () => {
    alert('Checkout coming soon! We\'re working on payment integration.');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={toggleCart}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l-2 border-border bg-background shadow-2xl sm:w-96">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-border p-6">
            <h2 className="font-display text-2xl font-black uppercase tracking-tight">
              Your Cart
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="hover:bg-accent"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
                <p className="font-display text-xl font-bold uppercase text-muted-foreground">
                  Your cart is empty
                </p>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">
                  Add some items to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border-2 border-border bg-card p-4 transition-all hover:border-strength"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-black uppercase">
                          {item.name}
                        </h3>
                        <p className="mt-1 font-bold text-strength">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-4 flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="min-w-[2rem] text-center font-bold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <span className="ml-auto font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Totals and Checkout */}
          {items.length > 0 && (
            <div className="border-t-2 border-border bg-card p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold uppercase">Subtotal</span>
                  <span className="font-display text-xl font-black">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t-2 border-border pt-3">
                  <span className="font-display text-lg font-black uppercase">
                    Total
                  </span>
                  <span className="font-display text-2xl font-black text-strength">
                    {formatPrice(subtotal)}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="mt-6 w-full font-black uppercase"
                size="lg"
                disabled={items.length === 0}
              >
                Checkout
              </Button>

              <p className="mt-4 text-center text-xs font-semibold text-muted-foreground">
                Free shipping on orders over $50
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
