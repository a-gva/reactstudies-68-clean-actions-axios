function About() {
    return (
        <>
            <h1 className='text-6xl mb-4'>Buscador Github</h1>
            <p className='mb-4 text-2xl font-light'>
                Um aplicativo em ReactJS para buscar perfis no Github e exibir seus detalhes.
                Este projeto é parte do
                <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
                    {' '}
                    Curso React Front To Back
                </a>{' '}
                (Udemy), oferecido por
                <strong>
                    <a href='https://traversymedia.com'> Brad Traversy</a>
                </strong>
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Layout By:
                <a className='text-white' href='https://twitter.com/hassibmoddasser'>
                    Hassib Moddasser
                </a>
            </p>
        </>
    )
}
export default About;
