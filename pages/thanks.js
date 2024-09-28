import { useEffect } from 'react';

import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Thanks() {
	const router = useRouter()

	useEffect(() => {
		const BackRouting = setTimeout(() => {
		  router.replace('/') 
		}, 3000)
	
		return () => clearTimeout(BackRouting)
	
	  }, [])
	  const metaTags = (
        <>
          <title>Title</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
         
    
          <meta property="og:type" content="website" />
          <meta property="og:url" content="/" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
    
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="/" />
          <meta property="twitter:title" content="" />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="" />
        </>
      );
      return (
        <CustomLayout meta={metaTags}>
        <section className="border-top">
		    <div className="containerFull">
		        <div className="row">
		            <div className="col-lg-10 offset-lg-1">
		                <div className="thankBlock text-center">
		                    <h3 className="large_heading fw-bold"><i className="far fa-check-circle text-success"></i></h3>
		                    <h1 className="heading my-3">Thank You !</h1>
		                    <h4 className="small_heading mb-3">Your submission is received and we will contact you soon. </h4>
		                    <Link href="/" className="mt-3"><i className="bi bi-arrow-left"></i> Back to Home</Link>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
    </CustomLayout>
  )
}
