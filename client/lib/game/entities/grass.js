ig.module('game.entities.grass').requires('impact.entity').defines(function() {

	EntityGrass = ig.Entity.extend({
		
		size: {
			x: 16,
			y: 16
		},

		// Should be above player entities zPriority.
		zPriority: 4,

		// Load image resource.
		animSheet: new ig.AnimationSheet('media/grass-animation.png', 16, 16),
		
		// Used to keep entity alive briefly before killing.
		killTimer: null,

		// Is set to true when markForDeath() is called.
		markedForDeath: false,

		// Start count-down until this entity will be killed.
		markForDeath: function() {
			
			// Set the timer.
			this.killTimer.set(3);

			// Allow removal of entity.
			this.markedForDeath = true;
		},

		// Save this entity from being killed.
		revive: function() {
			this.markedForDeath = false;
		},

		init: function(x, y, settings) {
			this.parent(x, y, settings);

			// Create timer to count-down to entity's death.
			this.killTimer = new ig.Timer();

			// Set zIndex.
			this.zIndex = this.zPriority + this.pos.y,
			
			// Create animation.
			this.addAnim('rustle', 0.1667, [0, 1, 2, 3, 4], true); // 10 frames of 60 per
			
			// No animation until one is triggered.
			this.currentAnim = null;
		},

		play: function() {
			
			// Rewind to first frame.
			this.anims.rustle.rewind();

			// Set animation.
			this.currentAnim = this.anims.rustle;
		},

		// Override all update function.
		update: function() {
			
			// Update animations.
			if (this.currentAnim != null) this.currentAnim.update();
			
			// Check if entity is no longer needed.
			if (this.markedForDeath && this.killTimer.delta() >= 0) 
			{
				// Free up resources.
				this.kill();
			}
		}

	});
});
