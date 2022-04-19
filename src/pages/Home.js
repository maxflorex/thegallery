import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const myClass = 'my-8 bg-stone-100 flex justify-center m-8 p-8'

  const boxAnimation = {
    key: 'box',
    initial: { y: '50%', opacity: 0, scale: 0.5 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: '50%', opacity: 0, transition: { duration: 0.4 } },
    transition: { duration: 0.4, ease: 'easeOut' }
  }

  return (
    <div className='flex flex-col justify-center'>
      <button className='p-4 bg-stone-300 rounded-full mx-auto my-8' onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
      <AnimatePresence>

        {isOpen &&
          <motion.div
            {...boxAnimation}
            className={myClass}>
            <h1>I'm open!</h1>
          </motion.div>
        }
      </AnimatePresence>
    </div>

  )
}

export default Home