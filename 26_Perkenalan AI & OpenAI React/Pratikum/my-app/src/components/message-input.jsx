import React from 'react'
import OpenAI from "openai";





const message = () => {
  async function OpenAI (value) {
    const response = await OpenAI.chat.completion.create({
        model:"gpt-3.5-turbo",
        message:[{role:"user",message: value.query}]
    })
    console.log(response)
   }

  return (
<form>
<input type='text' placeholder='Message...' name='input-message'/>
<button type='button' className='btn btn-success '></button>
</form>
  )
}

export default message