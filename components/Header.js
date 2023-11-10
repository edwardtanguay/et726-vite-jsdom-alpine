export const Header = () => {
	return /*html*/ `
	
	<h1 class="text-3xl text-blue-800" x-show="language === 'English'">Alpine German/English Demo</h1>	
	<h1 class="text-3xl text-blue-800" x-show="language === 'German'">Alpine Deutsch/Englisch Demonstration</h1>	
	<h1 class="text-3xl text-blue-800" x-show="language === 'Chinese'">高山德语/英语示范</h1>	
	<button @click="language = language === 'English' ? 'German' : language === 'German' ? 'Chinese' : 'English'"><span x-text="language"></span></button>

	<p x-show="language === 'English'">Welcome to this site.</p>
	<p x-show="language === 'German'">Willkommen zu dieser Site.</p>
	<p x-show="language === 'Chinese'">欢迎来到本网站。</p>
	<hr/>
	
	`;
}