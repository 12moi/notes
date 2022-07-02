

// const App = () => (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
  
//   export default App

// const App = () => {
//     console.log('Hello from component')
//     return (
//       <div>
//         <p>Hello world</p>
//       </div>
//     )
//   }


//   export default App

// const App = () => {
//     const now = new Date()
//     const a = 10
//     const b = 20
//     return React.createElement(
//       'div',
//       null,
//       React.createElement(
//         'p', null, 'Hello world, it is ', now.toString()
//       ),
//       React.createElement(
//         'p', null, a, ' plus ', b, ' is ', a + b
//       )
//     )
//   }

// components example

const Hello = () => {
    return (
      <div>
        <p>Hello world</p>
      </div>
    )
  }
  
  const App = () => {
    return (
      <div>
        <h1>Greetings</h1>
        <Hello />
      </div>
    )
  }