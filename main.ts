controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Character 1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level0`)
mySprite.ay = 0
scene.cameraFollowSprite(mySprite)
scene.setBackgroundImage(assets.image`Background 1`)
