
export default function Footer(){
    return <>
        <div className="w-full p-15 flex justify-center bg-[var(--color-5)]">
            <h4>
                <ul className="list-none flex flex-row gap-4">
                    <li>
                        
                        <a href="https://github.com/Yugen1121" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github"></i> Github
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yugen-limbu-aa869b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                           <i className="fa fa-linkedin-square"></i> LinkedIn
                           </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:yugenlimbu777@gmail.com">
                        <i className="fa fa-envelope"></i>
                        Email</a>
                    </li>
                </ul>
            </h4>
        </div>
    </>
}
