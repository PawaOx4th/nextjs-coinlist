import React, { useMemo } from "react"
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa"
import useMedia from "use-media"

function CoinPrice({ price }: { price: number }) {
  const isXl = useMedia({ minWidth: "1280px" })
  const isCoinNegative = useMemo(() => {
    return price.toString().startsWith("-")
  }, [price])

  return (
    <div className="w-auto flex items-center gap-2">
      {isCoinNegative ? (
        <FaArrowCircleDown className="text-red-700" />
      ) : (
        <FaArrowCircleUp className="text-blue-500" />
      )}
      <strong
        className={`${isCoinNegative ? "text-red-600" : "text-blue-600"}`}
      >
        {Number.parseFloat(`${price}`).toFixed(isXl ? 4 : 2)}
      </strong>
    </div>
  )
}

export default CoinPrice
