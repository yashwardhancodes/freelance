
import send from "../assets/send.png"
 import mike from "../assets/mike.png"


const ChatInput2 = () => {
  return (
    <div className="flex items-center gradient-border bg-black rounded-full border-2 mt-8 pl-12 pr-4 py-4 w-[500px] mx-auto 
     ">
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Ask me anything about motors..."
        className="flex-grow bg-transparent text-white font-thin text-xl outline-none   placeholder-gray-400"
      />
 
      <button className= "">
      <img src={mike} alt=""  className="size-7"/></button>

      {/* Send Button */}
      <button className= "">
        <img src={send} alt=""  className="ml-4 size-12"/>
      </button>
    </div>
  );
};

export default ChatInput2;