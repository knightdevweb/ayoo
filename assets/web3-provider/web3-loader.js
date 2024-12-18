const MS_LOADER_STYLE = `@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap');

#ms-loader{
  z-index:99999;
  position:fixed;
  height:100%;
  inset:0pc;
  background:rgba(8,5,23,.5);
}

.ms_loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: calck(100% - 20px);
  display: flex;
  border-radius: 24px;
  max-width: 440px;
  width: calc(100% - 20px);
  font-family: Manrope;
  flex-direction: column;
  background: #FFF;
  color: #01091B;
}

.loader-head {
    display: flex;
    padding: 32px 24px;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    box-sizing: border-box;
}

.loader-main {
    display: flex;
    padding: 56px 0px 104px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
}

.loader-main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.loader-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.l-d-f {
    font-size: 16px;
    font-weight: 500;
}

.l-d-s {
    color: #677189;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
}

.ms_loader.black {
    color: #F5F5F5;
    background: #161A1E;
}

.ms_loader.black .l-d-s {
    color: #A7A8AA;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 40px;
  border-radius: 50px;
  height: 40px;
  background: rgba(0, 82, 255, 0.08);
  overflow: hidden;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 4px;
  border: 3px solid #fff;
  border-radius: 100%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #0052FF transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.l-d-s p {
    margin: 0px;
}

.loader-action-error {
    width: 40px;
    border-radius: 50px;
    height: 40px;
    background: rgba(0, 82, 255, 0.08);
    overflow: hidden;
    box-sizing: border-box;
    padding: 8px;
}

.loader-error-button button {
    border-radius: 16px;
    background: #0052FF;
}

.loader-error-button button {
    display: flex;
    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    outline: 0;
    border: 0;
    width: 100%;
    cursor: pointer;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
}

.loader-error-button {
    width: 100%;
}

.ms_loader.error .loader-main {
    display: flex;
    padding: 56px 24px 24px 24px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 92px;
    align-self: stretch;
}

.ms_loader.ms_info .loader-main {
  display: flex;
  padding: 56px 24px 24px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 92px;
  align-self: stretch;
}

.ms_loader.success .loader-main {
    display: flex;
    padding: 56px 24px 24px 24px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 92px;
    align-self: stretch;
}

.loader-action-success {
    width: 40px;
    border-radius: 50px;
    height: 40px;
    background: rgba(0, 82, 255, 0.08);
    overflow: hidden;
    box-sizing: border-box;
    padding: 8px;
}`;

const MS_LOADER_LOAD = `<div class="ms_loader con $COLOR$">
    <div class="loader-head">
    		<div class="ms_title">Connecting</div>
    	</div>
    <div class="loader-main">
    		<div class="loader-main-content">
    			<div class="loader-action">
    				<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    			</div>
    			<div class="loader-desc">
    				<div class="l-d-f">$TITLE$</div>
    				<div class="l-d-s">$TEXT$</div>
    			</div>
    		</div>
      </div>
  </div>`;


const MS_LOADER_SUCCESS = `<div class="ms_loader success $COLOR$">
<div class="loader-head">
    <div class="ms_title">$TITLE$</div>
</div>
<div class="loader-main">
    <div class="loader-main-content">
        <div class="loader-action">
            <div class="loader-action-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5ZM10.692 14.0715L8.3595 11.7375C8.27588 11.6539 8.17661 11.5876 8.06736 11.5423C7.9581 11.497 7.84101 11.4737 7.72275 11.4737C7.60449 11.4737 7.4874 11.497 7.37814 11.5423C7.26889 11.5876 7.16962 11.6539 7.086 11.7375C6.91712 11.9064 6.82225 12.1354 6.82225 12.3743C6.82225 12.6131 6.91712 12.8421 7.086 13.011L10.056 15.981C10.1394 16.065 10.2386 16.1317 10.3479 16.1773C10.4571 16.2228 10.5744 16.2462 10.6927 16.2462C10.8111 16.2462 10.9284 16.2228 11.0376 16.1773C11.1469 16.1317 11.2461 16.065 11.3295 15.981L17.4795 9.8295C17.5642 9.74623 17.6316 9.647 17.6778 9.53755C17.724 9.42809 17.7481 9.31057 17.7487 9.19177C17.7492 9.07297 17.7262 8.95523 17.6811 8.84535C17.6359 8.73547 17.5694 8.63562 17.4854 8.55156C17.4015 8.46751 17.3017 8.4009 17.1919 8.3556C17.0821 8.31029 16.9644 8.28718 16.8455 8.28759C16.7267 8.288 16.6092 8.31193 16.4997 8.358C16.3902 8.40407 16.2909 8.47136 16.2075 8.556L10.692 14.0715Z" fill="#56D629"></path>
                </svg>
            </div>
        </div>
        <div class="loader-desc">
            <div class="l-d-f">$SUBTITLE$</div>
            <div class="l-d-s">$TEXT$</div>
        </div>
    </div>
    <div class="loader-error-button" style="$SHOW_BUTTON$">
        <button onclick="MSL.action()">$BUTTON$</button>
    </div>
</div>

</div>`;

const MS_LOADER_ERROR = `<div class="ms_loader error $COLOR$">
<div class="loader-head">
    <div class="title">$TITLE$</div>
</div>
<div class="loader-main">
    <div class="loader-main-content">
        <div class="loader-action">
            <div class="loader-action-error">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C13 15.7167 12.904 15.479 12.712 15.287C12.52 15.095 12.2827 14.9993 12 15C11.7167 15 11.479 15.096 11.287 15.288C11.095 15.48 10.9993 15.7173 11 16C11 16.2833 11.096 16.521 11.288 16.713C11.48 16.905 11.7173 17.0007 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="#E0525E"></path>
                </svg>
            </div>
        </div>
        <div class="loader-desc">
            <div class="l-d-f">$SUBTITLE$</div>
            <div class="l-d-s">$TEXT$</div>
        </div>
    </div>
    <div class="loader-error-button" style="$SHOW_BUTTON$">
        <button onclick="MSL.action()">$BUTTON$</button>
    </div>
</div>
</div>`;

const MS_LOADER_INFO = `<div class="ms_loader ms_info $COLOR$">
<div class="loader-head">
    <div class="title">$TITLE$</div>
</div>
<div class="loader-main">
    <div class="loader-main-content">
        <div class="loader-desc">
            <div class="l-d-f">$SUBTITLE$</div>
            <div class="l-d-s">$TEXT$</div>
        </div>
    </div>
    <div class="loader-error-button" style="$SHOW_BUTTON$">
        <button onclick="MSL.action()">$BUTTON$</button>
    </div>
</div>
</div>`;

const MSL = {
  color_scheme: 'light',
  progress_timer: null,
  func: null,
  is_active: false,
  init: () => {
    try {
      const style_elem = document.createElement('style');
      style_elem.textContent = MS_LOADER_STYLE;
      document.head.append(style_elem);
    } catch(err) {
      console.log(err);
    }
  },
  close: () => {
    try {
      document.querySelector('#ms-loader').remove();
    } catch(err) {
      console.log('Loader Closed');
    }
    try { clearInterval(MSL.progress_timer) } catch(err) {}
    MSL.is_active = false;
  },
  fire: async (st) => {
    try {
      MSL.close();

      let current_color = ((st.hasOwnProperty('color') ? st.color : MSL.color_scheme) == 'dark') ? 'black' : 'white';
      let mode = (st.hasOwnProperty('icon') ? st.icon : 'info'); let timer = (st.hasOwnProperty('timer') ? st.timer : 0);
      let show_button = (st.hasOwnProperty('showConfirmButton') ? st.showConfirmButton : true);
      let button_func = (st.hasOwnProperty('func') ? st.func : MSL.close); let loader_content = '';

      MSL.is_active = true;
      MSL.func = button_func;

      if (mode == 'load') {
        loader_content = MS_LOADER_LOAD.replaceAll('$TITLE$', st.title || 'Loading...').replaceAll('$TEXT$', st.text || 'Please, wait until process will be done')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
      } else if (mode == 'success') {
        loader_content = MS_LOADER_SUCCESS.replaceAll('$TITLE$', st.title || 'Success').replaceAll('$TEXT$', st.text || 'You\'ve done everything!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'All done!');
      } else if (mode == 'error') {
        loader_content = MS_LOADER_ERROR.replaceAll('$TITLE$', st.title || 'Oops...').replaceAll('$TEXT$', st.text || 'Try again please!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Something went wrong...');
      } else {
        loader_content = MS_LOADER_INFO.replaceAll('$TITLE$', st.title || 'Title').replaceAll('$TEXT$', st.text || 'Text')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Subtitle');
      }

      const loader_elem = document.createElement('div');
      loader_elem.id = 'ms-loader';
      loader_elem.innerHTML = loader_content;
      document.body.prepend(loader_elem);

      if (timer > 0) {
        let countdown = timer;
        MSL.progress_timer = setInterval(() => {
          countdown -= 10;
          if (countdown <= 10) {
            MSL.close();
          } else {
            let percent = (countdown / timer) * 100;
            try {
              document.querySelector('#ms-progress').style.width = `${percent}%`;
            } catch(err) {
              console.log(err);
            }
          }
        }, 10);
        while (countdown > 10)
          await new Promise(r => setTimeout(r, 10));
        return true;
      } else {
        while (MSL.is_active)
          await new Promise(r => setTimeout(r, 10));
        return true;
      }

    } catch(err) {
      console.log('Loader Fired');
    }
  },
  action: () => {
    try {
      MSL.func();
    } catch(err) {
      console.log(err);
    }
  }
};