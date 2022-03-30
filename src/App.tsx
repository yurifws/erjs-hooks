
import { useRef } from 'react';
import './App.css';
import ScrollableBox, { ScrollableRef } from './ScrollableBox';


function App() {

  const boxRef = useRef<ScrollableRef>(null)

  return (
    <div className="App" >
      <ScrollableBox ref={boxRef} width={120} height={120}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloremque et fuga accusamus repellendus quis modi, odit architecto necessitatibus ipsum, itaque unde amet praesentium mollitia at totam, non temporibus possimus molestias libero cum autem nemo! Impedit doloremque architecto cum, soluta temporibus modi magni, ad tempore molestias magnam tempora non maxime eius necessitatibus cumque numquam officiis dolor quidem exercitationem molestiae at illo iure odio saepe? Ducimus possimus eaque distinctio, est ipsum nemo accusantium repellat pariatur tenetur tempora dignissimos iusto molestiae quibusdam, fugiat soluta amet ut eum ullam doloribus perspiciatis ratione non modi! Tempore alias accusamus facilis voluptatum nam. Dolorem eum vel necessitatibus modi autem, incidunt molestiae quibusdam ex voluptatem error cupiditate deleniti reiciendis fugit quia esse suscipit temporibus aperiam? Possimus facilis libero quibusdam deleniti ratione, amet autem, illo asperiores nesciunt provident, optio voluptates qui beatae ea vel consequatur quod? Amet, possimus iusto perferendis ex facilis expedita magni inventore aut sint harum provident cum accusamus, numquam veritatis. Eius laudantium, voluptate, dolore recusandae pariatur architecto vel consequatur quisquam omnis, aperiam officia nesciunt fuga labore. Aspernatur incidunt quos veritatis aut odit possimus eaque obcaecati enim, architecto nesciunt hic, doloremque, autem eius! Repellendus mollitia explicabo doloribus maiores repudiandae exercitationem, rem enim. Magnam ex accusantium voluptas!</p>
      </ScrollableBox>
      <button onClick={() => boxRef.current?.scrollToBottom()}>
        descer
      </button>
    </div>
  );
}

export default App;
