import React from 'react';
import Faq from 'react-faq-component';
const data = {
 
  rows: [
    {
      title: "How can I schedule an appointment?",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Do you accept insurance?",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "What should I bring to my appointment?",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "Do you offer telemedicine appointments?",
      content: "v1.0.5"
    }]
}

const FaqSection = () => {
  return (
    <div className='my-10'>
      <button type="button" className='border border-black py-1 px-5 rounded-3xl mb-5'>Faq</button>
      <h1 className='font-bold text-2xl'>Frequntly Asked Question</h1>
      <div className='px-5'>
        <h1 className='bg-[#FFFFF5] p-2 font-medium'> What are your office hours?</h1>
        <div className="divider"></div>
        <p className='text-gray-500'>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
      </div>
      <div className='px-5'>
        <Faq data={data}/>
      </div>
    </div>
  );
};

export default FaqSection;