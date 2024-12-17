export default function Characters() {
  return (
    <div className="grid grid-cols-5 w-full h-full gap-2 py-2 pr-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div key={index} className=" bg-green-900">
          {item}
        </div>
      ))}
    </div>
  );
}
