import { beforeAll, describe, test, afterAll, it } from "vitest"
import { $fetch, fetch, setup, url, startServer,setTestContext, createTestContext, useTestContext} from '@nuxt/test-utils'
import * as nt from '@nuxt/test-utils'

    


describe('suite', async () =>{
    console.log(useTestContext())
    // let html = await $fetch(url("/"))
    // const useUrl =  url("/")
    // console.log(useUrl)
    // let html = await $fetch('/')
    console.log(url(""))
    it('renders', async()=> {
        let html = await fetch('/project-news-homepage-layout/')
        console.log(html)
        // console.log(`sampel path = ${url("/")}`)
    }, ) 
    afterAll(async () => {
        
    })
},)