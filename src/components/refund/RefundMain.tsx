export default function RefundMain() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Refund & Return Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Return Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We want you to be completely satisfied with your purchase. If you
              are not satisfied, you may return most items within 30 days of
              delivery for a full refund or exchange.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">
              Conditions for Returns
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                Items must be unused, unworn, and in their original packaging
              </li>
              <li>Items must have all tags and labels attached</li>
              <li>Items must be in the same condition as when received</li>
              <li>Proof of purchase (order number or receipt) is required</li>
              <li>Returns must be initiated within 30 days of delivery</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">
              Items Not Eligible for Return
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Items that have been used, worn, or damaged</li>
              <li>Items without original packaging or tags</li>
              <li>Personalized or customized items</li>
              <li>Items purchased more than 30 days ago</li>
              <li>Gift cards and promotional items</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              How to Return an Item
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                Contact our customer service team at{" "}
                <a
                  href="mailto:returns@flindor.com"
                  className="text-accent hover:underline"
                >
                  returns@flindor.com
                </a>{" "}
                or call +234 800 000 0000 to initiate a return
              </li>
              <li>Provide your order number and reason for return</li>
              <li>
                You will receive a Return Authorization (RA) number and
                instructions
              </li>
              <li>
                Package the item securely with the RA number visible on the
                package
              </li>
              <li>
                Ship the item to the address provided in the return instructions
              </li>
              <li>
                We recommend using a trackable shipping method as we are not
                responsible for lost return packages
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Refund Policy
            </h2>
            <p className="text-gray-700 mb-4">
              Once we receive and inspect your returned item, we will process
              your refund within 5-7 business days.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">
              Refund Method
            </h3>
            <p className="text-gray-700 mb-4">
              Refunds will be issued to the original payment method used for the
              purchase. Please note that it may take additional time for the
              refund to appear in your account, depending on your bank or
              payment provider.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">
              Refund Amount
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                Full refund of the item price for items returned in original
                condition
              </li>
              <li>
                Original shipping costs are non-refundable unless the item is
                defective or we made an error
              </li>
              <li>
                Return shipping costs are the responsibility of the customer
                unless the item is defective or we made an error
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Exchanges
            </h2>
            <p className="text-gray-700 mb-4">
              If you need to exchange an item for a different size, color, or
              style, please contact our customer service team. Exchanges are
              subject to product availability. If the item you want is not
              available, we will process a refund instead.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Defective or Damaged Items
            </h2>
            <p className="text-gray-700 mb-4">
              If you receive a defective or damaged item, please contact us
              immediately with photos of the damage. We will arrange for a
              replacement or full refund, and we will cover all return shipping
              costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Processing Time
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Return Processing:</strong> 5-7 business days after we
                receive your returned item
              </li>
              <li>
                <strong>Refund Processing:</strong> 3-5 business days after
                approval
              </li>
              <li>
                <strong>Credit Card Refunds:</strong> 5-10 business days to
                appear in your account
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about returns or refunds, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:returns@flindor.com"
                  className="text-accent hover:underline"
                >
                  returns@flindor.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +234 800 000 0000
              </li>
              <li>
                <strong>Hours:</strong> Monday - Friday, 9AM - 6PM WAT
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
