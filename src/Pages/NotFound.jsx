import FuzzyText from '../React bits components/FuzzyText'

const NotFound = () => {
  return (
    <div className='h-[86vh] w-full flex-col text-8xl flex justify-center items-center'>

        <FuzzyText
            baseIntensity={0.2} 
            hoverIntensity={0.5} 
            enableHover={true}
            color='red'
            >
            404 
        </FuzzyText>
        <FuzzyText
            baseIntensity={0.2} 
            hoverIntensity={0.5} 
            enableHover={true}
            color='red'
            >
            not found
        </FuzzyText>
    </div>
  )
}

export default NotFound