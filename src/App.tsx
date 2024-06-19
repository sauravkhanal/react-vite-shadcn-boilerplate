import { ThemeProvider } from "@/components/Context/ThemeProvider";
import NavBar from "@/components/NavBar";

function App() {
    return (
        <ThemeProvider>
            <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-40">
                <NavBar />
            </div>
        </ThemeProvider>
    );
}

export default App;
