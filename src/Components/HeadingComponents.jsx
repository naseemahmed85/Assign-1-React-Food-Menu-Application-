export default function HeadingComponent() {
return (
    <div>
        <h1 id='heading'>Our Food Menu Application</h1>
    <hr id='hrLine'/>
    <h2 style={
    {
        textAlign: 'center',
        color: 'blue'
    }
    }>Our Menu</h2>
    <hr id='hrLine'/>
    <p className='para'>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
    </div>
)
}