import logo from '../assets/logo.png'
export default function Header() {
    return <header id="header">
        <img src={logo} alt="logo for emotion analyzer"/>
        <h1>Emotion Analyzer</h1>
        <div>Enter some phrase and see its emotions distribution!</div>
    </header>
}
