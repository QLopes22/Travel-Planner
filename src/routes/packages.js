import "./packages.css"

function packages () {
    return (
        <>
        <div className='balloons'>
            <img className='balloon-img' src='https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'></img>
        </div>
        
        <div className="packages-container">
            <h2>Trip Details</h2>
            <p>Select Destination:</p>
            <input type="text" name="name" placeholder="Destination of Interest..."></input>
            {/* calendar */}
            <input type="date" name="date"></input>
            <input type="number" name="name" placeholder="how many adults?"></input>
            <input type="number" name="name" placeholder="how many kids?"></input>
            <input type="number" name="name" placeholder="how many seniors?"></input>
            <input type="number" name="name" placeholder="Additional Notes..."></input>
            <input type="submit" value="submit"></input>
        </div>
        </>
    )
}

export default packages;

