export default eventHandler(async () => {
  const { blobs } = await hubBlob().list({
    limit: 3
  })

  return blobs
})
