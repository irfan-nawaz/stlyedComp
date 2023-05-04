import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const SideNav = () => {
  return (
    <aside>
      <a href="">
        <AiOutlineMenu />
      </a>
      <nav>
        <a href="">
          <AiOutlineClose />
        </a>
        <div>
          <form action="">
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="HIGH_TO_LOW_PRICE"
              />
            </label>
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="Low_TO__PRICE"
              />
            </label>
          </form>
        </div>
      </nav>
      <a href=""></a>
    </aside>
  )
}
export default SideNav
