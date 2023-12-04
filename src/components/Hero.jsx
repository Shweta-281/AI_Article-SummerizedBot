import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
   
      <nav className='logo'>
        <img src={logo} alt="sumz_logo" className=' object-cover w-28' />
        <button type='button' onClick={() => window.open('https://github.com/Shweta-281')} className='black_btn justify-end flex items-end'>GitHub</button>
      </nav>

      <h1 className='head_text'>Summerize Articles with <br 
       className='max-md:hidden'/><span className='red_gradient'>OpenAI GPT-4</span></h1>

       <h2 className='desc'>
       Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
       </h2>
    </header>
  )
}

export default Hero;