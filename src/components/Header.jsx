import PropTypes from 'prop-types'

const Header = ({setSearch}) => { 
  
  return (
    <header className="backdrop-blur-lg flex flex-col w-full sticky top-0 z-50 justify-center items-center py-5">
        <div className="font-bold text-4xl md:text-5xl text-center">
            <h1 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">MovieLand</h1>
        </div>
        <nav className="flex justify-between w-full">
            
            <div className="flex gap-2 justify-center items-center w-full py-5">
                <input placeholder="Search you movie here..." type="text" className="rounded-lg h-10 w-1/2 pl-4 px-1 font-semibold text-xl" onChange={(e) => setSearch(e.target.value)}/>
                {/* <button className="bg-gradient-to-r from-cyan-500 to-blue-500 h-10 rounded-lg py-1 px-2"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png" alt="" /></button> */}
            </div>

        </nav>
    </header>
  )
}

Header.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
}

export default Header
