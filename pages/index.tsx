import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage
} from "next"

import CoinPrice from "../src/components/CoinPrice"
import Layout from "../src/components/Layout"
import LogoCoin from "../src/components/LogoCoin"
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
        <div className="grid grid-flow-row grid-cols-12 py-5 px-5 gap-4">
          {markets.map((coin) => {
            return (
              <div
                key={coin.id}
                className="col-span-12 sm:col-span-6 md:col-span-4  lg:col-span-3 xl:col-span-2 flex p-4 border rounded-md items-center justify-between  hover:shadow-md transition-all hover:cursor-pointer overflow-hidden bg-neutral-200"
              >
                <LogoCoin coin={coin} coinName={coin.name} />
                <CoinPrice price={coin.price_change_24h} />
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default Home
