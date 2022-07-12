import './newsLetter.scss';

const NewsLetter = () => {
  return (
    <section className='news_letter'>
        <div className='news_content'>
            <p className='news_heading'>Join our newsletter 🎉</p>
            <p className='news_para'>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
            <div className='input_container'>
                <input type="text" placeholder='Enter your email' />
                <button className='btn_primary'>Submit</button>
            </div>
        </div>
        <div className='news_img'>
            <img src="/assets/newsletter.png" alt="newsletter_img" />
        </div>
    </section>
  )
}

export default NewsLetter