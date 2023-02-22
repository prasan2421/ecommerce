import {createClient} from '@sanity/client'
import imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
projectId:'4usbcp6k',
dataset:'production',
apiVersion:'2023-02-20',
useCdn:true,
token: process.env.NEXT_PUBLIC_SANITY_TOKEN

})

const builder = imageUrlBuilder(client);

export const urlFor = (source:any) => builder.image(source);