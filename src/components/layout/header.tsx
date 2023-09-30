'use client';

import { useModalContext } from '#@/app/context/modal-context';
import { useRouter } from 'next/navigation';
import { ReactNode, Suspense, useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import layout from '#@/styles/layout.module.css';
import type { Route } from 'next';
import typography from '#@/styles/fonts/typography.module.scss';
import Loader from './loader';
import InputSearchBar from './search/InputSearchBar';
import ModalDialog, { ModalDialogButton } from '../Modal';
import { useMediaQuery } from '#@/app/hooks/match-media';

export default function Header (
  {
    children
  }: {children: ReactNode}
) {
  const router = useRouter();
  let modalSegment;

  const isMobile = useMediaQuery(
    '(min-width: 768px)'
  );

  const [
    isNavOpen,
    setIsNavOpen
  ] = useState(
    false
  );

  const

    {
      setIsModalOpen
    }   = useModalContext();

  if ( isNavOpen ) {
    modalSegment = (

      <nav className={ styles.drawer }>

        <Link
          className={ layout.link }
          href={ '/NuestraFirma'}
        >
          <span className="material-symbols-outlined">gavel</span>
          <h1 className={ typography.labelMedium }>{ 'Nuestra Firma' }</h1>
        </Link>
        <Link
          className={ layout.link }
          href={ '/Publicaciones'}
        >
          <span className="material-symbols-outlined">post</span>
          <h1 className={ typography.labelMedium }>{ 'Publicaciones' }</h1>
        </Link>
        <Link
          className={ layout.link }
          href={'/Servicios'}
        >
          <span className="material-symbols-outlined">folder_open</span>
          <h1 className={ typography.labelMedium }>{ 'Servicios' }</h1>
        </Link>


        <Link
          className={ layout.link }
          href={ '/Servicios/Cotizacion' }
        >
          <span className="material-symbols-outlined">folder_open</span>
          <h1 className={ typography.labelMedium }>{ 'Cotice con nosotros' }</h1>
        </Link>
        <Link
          className={ layout.link }
          href={ '/Contacto' }
        >
          <span className="material-symbols-outlined">folder_open</span>
          <h1 className={ typography.labelMedium }>{ 'Contacto' }</h1>
        </Link>


        <div className={styles.sidenav}>
          {children}
        </div>

      </nav> );
  }



  return (
    <div className={ layout.header }>
      <Link
        href={ '/' as Route }
        className={ styles.buttonHome }
      >
        <span className={ `material-symbols-outlined ${ styles.icon }` }>home</span>
        <p className={ styles.ButtonTextHelper }>inicio</p>
      </Link>
      <Suspense fallback={ <Loader /> }>
        <InputSearchBar />
      </Suspense>

      <button
        type="button"
        className={ styles.buttonBackwards }
        onClick={ () => {
          router.back();
        } }
      >
        <span className={ `material-symbols-outlined ${ styles.icon }` }>
          chevron_left
        </span>
        <p className={ styles.ButtonTextHelper }>atras</p>
      </button>
      <ModalDialogButton />
      <ModalDialog>
        <p>{'modal prueba '}</p>
      </ModalDialog>
      <button
        type="button"
        className={ styles.buttonForward }
        onClick={ () => {
          router.forward();
        } }
      >
        <span className={ `material-symbols-outlined ${ styles.icon }` }>
          chevron_right
        </span>
        <p className={ styles.ButtonTextHelper }>entrar</p>
      </button>

      {!isMobile && ( <button
        type="button"
        className={ styles.buttonDrawerMenu }
        onClick={ () => {
          setIsModalOpen(
            false
          );
          setIsNavOpen(
            (
              n
            ) => {
              return !n;
            }
          );
        } }
      >
        <span className={ `material-symbols-outlined ${ styles.icon }` }>
          { isNavOpen
            ? 'close'
            : 'menu' }
        </span>
      </button> )}
      { modalSegment}
    </div>

  );
}