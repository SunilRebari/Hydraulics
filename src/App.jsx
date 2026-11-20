import React,{useEffect} from 'react';
import {BrowserRouter,Route,Routes,useLocation} from 'react-router-dom';
import data from './data/site-data.json';
import {SiteHeader,SiteFooter} from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './styles.css';
function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});const page=data.products[pathname.split('/').pop()];document.title=page?`${page.title} | ${data.company}`:pathname==='/products.html'?`Our Products | ${data.company}`:pathname==='/company-profile.html'?`Company Profile | ${data.company}`:pathname==='/contact-us.html'?`Contact Us | ${data.company}`:data.company;},[pathname]);return null;}
function DynamicPage(){const path=useLocation().pathname;const product=data.products[path.split('/').pop()];const category=data.categories.find(x=>x.path===path);if(product)return <ProductPage product={product}/>;if(category)return <CategoryPage category={category}/>;return <NotFoundPage/>;}
function AppShell(){return <><ScrollToTop/><SiteHeader/><main><Routes><Route path="/" element={<HomePage/>}/><Route path="/products.html" element={<ProductsPage/>}/><Route path="/company-profile.html" element={<CompanyPage/>}/><Route path="/contact-us.html" element={<ContactPage/>}/><Route path="*" element={<DynamicPage/>}/></Routes></main><SiteFooter/></>}
export default function App(){return <BrowserRouter><AppShell/></BrowserRouter>}
