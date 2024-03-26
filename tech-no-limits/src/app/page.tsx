

"use client"

export default function Home() {


  const handleClick = () => {
    const testElement = document.getElementById("test");
      if (testElement) {
        testElement.textContent = "coucou";
      }
  };

  return (
    <main>
      <p id="test">cocou</p>
      <a href="" onClick={handleClick}>Test</a>
    </main>
  );  
}
