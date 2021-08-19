import Alert from '../components/alert'
import NavFooter from '../components/nav-footer'


export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        {//<Alert preview={preview} />
        }
        <main>{children}</main>
        <NavFooter/>



      </div>
      
    </>
  )
}
