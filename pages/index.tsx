import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage
} from "next"
import Image from "next/image"
import Layout from "../src/components/Layout"
import services from "../src/configs/axiosGlobalConfig"
import { ICoinMarket } from "../src/interfaces/ICoinMarket"

export const getServerSideProps: GetServerSideProps<{
  markets: ICoinMarket[]
}> = async () => {
  const response = await services.get<ICoinMarket[]>("/markets?vs_currency=usd")
  const markets = response.data

  return {
    props: {
      markets
    }
  }
}

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ markets }) => {
  return (
    <div className="font-montserrat font-medium">
      <Layout className="bg-slate-100 min-h-screen  !w-full">
        <div className="flex justify-center items-center flex-col gap-5">
          {markets.map((coin) => {
            return (
              <div
                key={coin.id}
                className="flex p-4 border rounded-md items-center justify-between w-[500px] hover:shadow-md transition-all hover:cursor-pointer "
              >
                <div className="flex items-center gap-4">
                  <Image src={coin.image} width="50px" height="50px" />
                  <div className="w-20 line-clamp-2">
                    <p className="truncate">{coin.name}</p>
                  </div>
                </div>
                <div>
                  <strong
                    className={`${
                      coin.price_change_24h.toString().startsWith("-")
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}
                  >
                    {Number.parseFloat(`${coin.price_change_24h}`).toFixed(4)}
                  </strong>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default Home
