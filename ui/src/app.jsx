import React, { useEffect } from 'react';
import Urbit from '@urbit/http-api';
import HeardGateways from './components/HeardGateways.jsx'
import PublishedGateways from './components/PublishedGateways.jsx'
import DeleteGateway from './components/DeleteGateway.jsx'
import InstallGatewayModal from './components/InstallGatewayModal.jsx'
import useUiState from '../state/useUiState.js';
import useGatewaysState from '../state/useGatewayState.js';

export function App() {
  const {
    subEvent,
    setSubEvent,
    loading,
    setLoading,
    showDelete,
    setShowDelete,
    installWindow,
  } = useUiState()
  const {
    setHeard,
    setPublished,
    setInstalled,
    setDelGateway,
  } = useGatewaysState()

  const api = new Urbit('', '', 'near');
  api.ship = window.ship

  async function scryToGateways() {
    console.log('scrying to gateways')
    let scryPublish = await api.scry({
      app: 'near-gateways',
      path: '/published'
    })

    let scryInstalled = await api.scry({
      app: 'near-gateways',
      path: '/installed'
    })

    let scryHeard = await api.scry({
      app: 'near-gateways',
      path: '/heard'
    })

    setHeard(scryHeard)
    setPublished(scryPublish)
    setInstalled(scryInstalled)
    setLoading(false)
  }

  function getUpdates(){
    api.subscribe({
      app:'near-gateways',
      path:'/updates',
      event: setSubEvent,
      err: () => (console.log('Failed to subscribe to near-gateways/updates')),
      quit: () => (console.log("Kicked from near-gateways/updates"))})
    }

  useEffect(() => {
    if (loading === true){
      scryToGateways()
    }
  }, [loading])

  useEffect(() => {
    getUpdates()
  }, [subEvent])

  async function deleteGateway(gateway) {
    api.poke({
        app: "near-gateways",
        mark: "near-action",
        json: {delete: {ship: gateway.ship, id: gateway.id}},
        onSuccess: () =>  {
          setDelGateway({})
          window.location.reload()
          setShowDelete(false)
        },
        onError: () => console.error('Failed to delete gateway')
    })
  }

  return (
    <div className='container-body'>
      <div className='container-main'>
        {!loading &&
          <div>
            {subEvent.url != undefined &&
              <div className='err-window'>
                <h2>Couldn't find glob for gateway at {subEvent.url}</h2>
                <button onClick={()=>{window.location.reload()}}>Reload</button>
              </div>
            }
            {showDelete &&
              <div>
                <DeleteGateway
                  deleteGateway={deleteGateway}
                />
              </div>
            }
            {installWindow &&
              <div>
                <InstallGatewayModal />
              </div>
            }
            <h2 className='headers'>Published</h2>
            <div className='containerComponent'>
              <PublishedGateways />
            </div>
            <h2 className='headers'>Heard</h2>
            <div className='containerComponent'>
              <HeardGateways />
            </div>
          </div>
        }
      </div>
    </div>
  )
}
