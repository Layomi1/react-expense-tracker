import Main from "./components/main/Main";

function App() {
  return (
    <container bg={"#f8fafd"} maxw={"container.3xl"} height={"100vh"} p={"0"}>
      <flex height={"full"}>
        <box height={"full"} flex={"5"} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Main />
        </box>
      </flex>
    </container>
  );
}

export default App;
