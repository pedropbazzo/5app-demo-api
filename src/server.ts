import { app } from './app'
import { config } from './config'

// Start service
app.listen(config.port, () => {
  console.log(`Service is listening on port ${config.port}.`) // tslint:disable-line:no-console
})
