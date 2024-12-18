import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQs = () => {
  const faqData = [
    {
      question: 'What is Vikreta?',
      answer:
        'Vikreta is an online platform for hosting and participating in auctions for various products and services.'
    },
    {
      question: 'How do I register for an auction?',
      answer:
        "To register, create an account, log in, and click on the 'Register' button on the desired auction page."
    },
    {
      question: 'Are there any registration fees?',
      answer:
        'Our webapp does not charge any fees for registration, it is fully free.'
    },
    {
      question: 'what is auction?',
      answer:
        'An auction is a public sale where goods or services are sold to the highest bidder. Participants place bids, and the item goes to the person who offers the most money. '
    },
    {
      question: 'How can I contact support?',
      answer:
        "You can reach out to our support team via the 'Contact Us' page or email us which is present in our footer."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center py-5'>
      <div className='container'>
        <h2 className='text-center mb-5'>Frequently Asked Questions</h2>
        <div className='accordion' id='faqAccordion'>
          {faqData.map((faq, index) => (
            <div key={index} className='accordion-item'>
              <h2 className='accordion-header' id={`heading${index}`}>
                <button
                  className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`} // Toggle collapse on click
                  type='button'
                  onClick={() => toggleFAQ(index)} // Toggle active index
                  aria-expanded={activeIndex === index ? 'true' : 'false'} // Set aria-expanded correctly
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`} // Show or hide based on active index
                aria-labelledby={`heading${index}`}
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
