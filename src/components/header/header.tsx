"use client"
import { useEffect, useRef, useState } from 'react';
import './header.css'
import useScroll from '@/hooks/useScroll';
import Link from 'next/link';
import { MenuItem } from '@/models/MenuItem.model';
import ObjectID from 'bson-objectid';
import React from 'react';
import { RouteEnum } from '@/enums/route.enum';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {

  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);
  const scrollPos = useScroll();
  const elementRef = useRef<HTMLDivElement>(null);
  const [ toggleMenu, setToggleMenu ] = useState(false);

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    new MenuItem('Home', '', '/shop'),
    new MenuItem('Shop', '', '/shop/collections'),
    new MenuItem('Products', '', '', [
      new MenuItem('Apple', '', '/shop/collections?brand=apple'),
      new MenuItem('Sony', '', '/shop/collections?brand=sony'),
      new MenuItem('Meta', '', '/shop/collections?brand=meta'),
      new MenuItem('Microsoft', '', '/shop/collections?brand=microsoft')
    ]),
    new MenuItem('Contact Us', '', '/shop/contact-us'),
  ]);

  const pathName = usePathname();


  const itemSelected = (selectedItem: MenuItem) => {
    setMenuItems(menuItems.map((item) => {
      item.selected = item === selectedItem;
      item.childItems = item.childItems?.map((childItem) => {
        childItem.selected = childItem === selectedItem;
        return childItem;
      }) as MenuItem[]
      return item;
    }));
  }


  useEffect(() => {
    for(let item of menuItems) {
      if(item.route === pathName) {
        itemSelected(item);
        break;
      }
    }
  }, []) 


  useEffect(() => {
    setPrevScrollpos((window! as Window) ? window.pageYOffset : 0);

    const divElem = elementRef.current;

    if (divElem && scrollPos > divElem.offsetHeight) {
      if (prevScrollpos > scrollPos) {
        elementRef.current.style.top = '0px';
      } else {
        elementRef.current.style.top = `-${divElem.offsetHeight}px`;
      }
    }

    setPrevScrollpos(scrollPos);
  }, [scrollPos]);
  
  return (
      <>
        {/* menu bar */}
        {/* , default is hidden. */}
        <div className="relative z-50 lg:hidden">
            <div 
              onClick={() => setToggleMenu(false)} 
              className={`fixed inset-0 bg-black bg-opacity-25 ${toggleMenu ? 'block' : 'hidden'}`}
            ></div>

            <div className={`fixed top-0 z-50 flex h-screen w-64 ${toggleMenu ? "left-0" : "-left-64"} transition-all`}>
                <div className="relative flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                      <div className="flex lg:flex-1">
                        <Link 
                          href={`/${RouteEnum.HOME}`} 
                          onClick={() => itemSelected( menuItems[0] )} 
                        >
                          <span className="sr-only">Your Company</span>
                          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" />
                        </Link>
                      </div>

                      <button 
                        onClick={() => setToggleMenu(false)}
                        type="button" 
                        className="flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      >
                          <span className="sr-only">Close menu</span>
                          <img src="/assets/icons/close.svg" />
                      </button>
                  </div>
                  <div className="flow-root">
                    <div className="divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        { 
                          menuItems.map(
                            (item, itemIndex) => {
                              if(item.isChildEmpty) return (
                                <React.Fragment
                                  key={new ObjectID().toHexString()}                                  
                                >
                                  <Link
                                    href={item.route}
                                    onClick={
                                      () => { 
                                        itemSelected(item); 
                                        setToggleMenu(false); 
                                      }
                                    } 
                                    className={
                                      `
                                        block rounded-lg px-5 py-2 text-base font-semibold leading-7 hover:bg-gray-50 
                                        ${item.selected ? "text-indigo-600" : "text-gray-900"}
                                      `
                                    }
                                  >
                                    {item.name}
                                  </Link>
                                </React.Fragment>                                
                              )

                              return (
                                <React.Fragment key={ new ObjectID().toHexString() }>
                                  {/* submenu product */}
                                  <div>
                                    <button
                                      onClick={() => {
                                        item.selected = !item.selected
                                        setMenuItems([ ...menuItems ])
                                      }} 
                                      type="button" 
                                      className="flex w-full rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-left" 
                                    >
                                      <span style={{ alignSelf: "center" }} className={`h-5 w-5 inline-block ${item.selected ? 'rotate-0' : '-rotate-90'}  transition-all`}>
                                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                      </span>
                                      <span className='inline-block align-middle'>
                                          { item.name }
                                      </span>
                                    </button>
                                    <div className={`mt-2 space-y-2 ${!item.selected && "hidden"}`}>
                                      {
                                        item.childItems?.map((childItem) => (
                                            <Link 
                                              key={new ObjectID().toHexString()} 
                                              href={childItem.route} 
                                              onClick={
                                                () => { 
                                                  itemSelected(childItem); 
                                                  setToggleMenu(false); 
                                                }
                                              }
                                              className="block rounded-lg py-2 pl-14 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                              {childItem.name}
                                            </Link>
                                        ))
                                      }
                                    </div>
                                  </div>
                                </React.Fragment>
                              )
                            } 
                          ) 
                        }
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

        {/* header */}
        <div ref={elementRef} className="bg-white drop-shadow-lg fixed w-screen transition-all z-40" style={{ top: 0 }}>
          <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
              {/* <!-- logo --> */}
              <div className="flex lg:flex-1">
                <Link href={`/${RouteEnum.HOME}`} className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" />
                </Link>
              </div>

              {/* <!-- hamburger menu button for mobile --> */}
              <div className="flex lg:hidden">
                <button onClick={() => setToggleMenu(!toggleMenu)} type="button" className="inline-flex items-center justify-center rounded-md px-3 text-gray-700">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                  </svg>
                </button>
              </div>

              {/* <!-- navigation menu --> */}
              <div className="hidden lg:flex lg:gap-x-12">

                {
                  menuItems.map(item => {
                    if(item.isChildEmpty) return (
                      <Link 
                        key={new ObjectID().toHexString()}
                        onClick={() => itemSelected(item)} 
                        href={item.route} 
                        className={`text-sm font-semibold leading-6 
                          ${ item.selected ? 'text-indigo-600' : 'text-gray-900'}`
                        }
                      >
                        { item.name }
                      </Link>
                    )

                    return (
                      <React.Fragment key={new ObjectID().toHexString()}>
                        {/* parent link having children links. */}
                        <div className="relative">
                          <button type="button" className={
                            `
                              nav-link flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900
                              ${ item.selected || item.childItems?.some(x => x.selected) ? 'text-indigo-600' : 'text-gray-900'}
                            `
                          }>
                            {item.name}
                            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                            </svg>
                          </button>

                          {/* <!-- sub navigation menu --> */}
                          {/* top-full */}
                          <div className="item absolute -left-2 z-10 mt-1 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 w-fit">
                            <div className="p-1" style={{ width: "max-content" }}>
                              {
                                item.childItems?.map((childItem) => (
                                  <div 
                                    key={new ObjectID().toHexString()} 
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                  >
                                    <div className="flex-auto cursor-pointer">
                                      <Link 
                                        key={new ObjectID().toHexString()}
                                        onClick={() => itemSelected(childItem)} 
                                        href={childItem.route}
                                        className={
                                          `text-sm font-semibold leading-6 
                                          ${ childItem.selected ? 'text-indigo-600' : 'text-gray-900'}`
                                        }
                                      >
                                        <span>
                                          { childItem.name }
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    )
                  })
                }
              </div>

              {/* <!-- cart & fav (maybe) icon link --> */}
              <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                {/* <span className="cursor-pointer">
                  <img className="w-6" src="./assets/icons/heart.svg" alt="" />
                </span> */}
                <Link href="/shop/cart" onClick={() => itemSelected(new MenuItem('', '', ''))}>
                  <span className="relative cursor-pointer">
                    <span 
                      style={{ 
                        fontSize: "0.8rem",
                        width: "1.2rem",
                        height: "1.2rem"
                      }}
                      className="absolute -top-2 -right-2 bg-indigo-600 rounded-full overflow-hidden text-center"
                    >
                      {2}
                    </span>
                    <img className="w-6" src="/assets/icons/shopping.svg" alt="" />
                  </span> 
                </Link>
              </div>
            </nav>
          </header>
        </div>
      </>
  ); 
}

    {/* <!-- mobile --> */}
    {/* <!-- <div x-description="Mobile menu, show/hide based on menu open state." class="lg:hidden" x-ref="dialog" x-show="open" aria-modal="true" style="display: none;">
<div x-description="Background backdrop, show/hide based on slide-over state." className="fixed inset-0 z-10"></div>
<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" @click.away="open = false">
<div className="flex items-center justify-between">
<a href="#" className="-m-1.5 p-1.5">
<span className="sr-only">Your Company</span>
<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" />
</a>
<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" @click="open = false">
<span className="sr-only">Close menu</span>
<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>
</button>
</div>
<div className="mt-6 flow-root">
<div className="-my-6 divide-y divide-gray-500/10">
<div className="space-y-2 py-6">
<div x-data="{ open: false }" className="-mx-3">
<button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" @click="open = !open" aria-expanded="false" x-bind:aria-expanded="open.toString()">
Product
<svg className="h-5 w-5 flex-none" x-description="Expand/collapse icon, toggle classes based on menu open state." viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
</svg>
</button>
<div class="mt-2 space-y-2" x-description="'Product' sub-menu, show/hide based on menu state." id="disclosure-1" x-show="open" style="display: none;">
<a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
<a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
<a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
<a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
<a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Automations</a>
<a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch demo</a>
<a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact sales</a>
</div>
</div>
<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
<a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
</div>
<div className="py-6">
<a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
</div>
</div>
</div>
</div>
</div> --> */}