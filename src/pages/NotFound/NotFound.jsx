import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NotFound.css';
import { useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/languageSelectors';
import { langNotFound } from 'languages/langNotFound';

export default function NotFound() {
  const location = useLocation();
  const lang = useSelector(getLanguage);
  const { lost, pageNotFound, goBack } = langNotFound;

  const backLink = location.state?.from ?? '/';

  return (
    <section className="page_404">
      <h1 className="text-center">404</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="four_zero_four_bg"></div>

              <div className="contant_box_404">
                <h3 className="h2">{lost[lang]}</h3>

                <p>{pageNotFound[lang]}</p>

                <Link href="" className="link_404" to={backLink}>
                  {goBack[lang]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
