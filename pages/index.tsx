export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 mt-5 gap-3">
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 card flex flex-col items-center">
          <h4 className="text-lg">HTML</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni eum cumque, accusamus quis consectetur maiores possimus deserunt voluptatum mollitia aliquam non recusandae architecto corrupti vero eligendi esse obcaecati laudantium.</p>
          <button className="btn self-end">click</button>
        </div>
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 card flex flex-col items-center">
          <h4 className="text-lg">CSS</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni eum cumque, accusamus quis consectetur maiores possimus deserunt voluptatum mollitia aliquam non recusandae architecto corrupti vero eligendi esse obcaecati laudantium.</p>
          <button className="btn self-end">click</button>
        </div>
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 card flex flex-col items-center">
          <h4 className="text-lg">JavaScript</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni eum cumque, accusamus quis consectetur maiores possimus deserunt voluptatum mollitia aliquam non recusandae architecto corrupti vero eligendi esse obcaecati laudantium.</p>
          <button className="btn self-end">click</button>
        </div>
      </div>
    </>
  );
}
