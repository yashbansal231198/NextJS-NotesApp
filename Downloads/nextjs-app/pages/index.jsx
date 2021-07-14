/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 3, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)


export async function getStaticProps() {
  const res = await fetch('https://animechan.vercel.app/api/random');
 const data= await res.json();
  
  return {
    props: {
      content: {
        title: data.quote
    }
  }
}
}
