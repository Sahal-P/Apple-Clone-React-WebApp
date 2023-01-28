import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/navar.css'

export function NavBarTest(){
    return (
        <div className='nav'>
            <div className='navItems'>
            <img
              alt=""
              src={require("../assets/images/appleLogo.svg").default}
              width="43"
              height="43"
              className="d-inline-block align-top ml-5"
              />{' '}
              <ul className='naveGone'>
                <li>
                    <a href="">
                       <img src={require("../assets/images/store.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/mac.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/ipad.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/iphone.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/watch.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/airpod.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/Tv.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/onlyapple.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/accessories.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                    <img src={require("../assets/images/support.svg").default} alt="" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img style={{marginTop:"15px"}} src={require("../assets/images/search.png")} alt="" width="15" height="15" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={require("../assets/images/shoppingbag.svg").default} alt=""  />
                    </a>
                </li>
              </ul>
        </div>
        </div>
    )
}

