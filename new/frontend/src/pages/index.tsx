//import { PingUseCase } from '@/@core/application/user/ping.use-case'
//import { Registry, container } from '@/@core/infra/container-registry'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

    //const useCase = container.get<PingUseCase>(Registry.PingUseCase)
    //useCase.execute()

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <section>
                    <Image src="/home.png" alt="fundo" width={3000} height={2050} />
                    <div>
                        <h1> AcustticAI </h1>
                    </div>
                </section>
            </main>
        </>
    ) 
}