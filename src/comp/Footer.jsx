import logoSquare from '../img/logos/tg-logo-2.svg'

const Footer = () => {
    return (
        <div className="bg-stone-200 px-4">
            <div className="container grid grid-cols-4 gap-16 py-16 justify-between mx-auto">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quaerat harum incidunt aliquam recusandae nihil repellendus dolores magni fugiat.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quaerat harum incidunt aliquam recusandae nihil repellendus dolores magni fugiat.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima quaerat harum incidunt aliquam recusandae nihil repellendus dolores magni fugiat.</p>
				<img src={logoSquare} alt="Logo Square" className='w-32 place-self-end'/>
			</div>
        </div>
    );
};

export default Footer;
