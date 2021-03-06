<?php
$all_page_post = ppw_free_get_all_page_post();
?>
<tr class="ppwp_free_version">
	<td class="feature-input"><span class="feature-input"></span></td>
	<td>
		<p>
			<label>
				<?php echo esc_html__( 'Password Protect Private Pages', PPW_Constants::DOMAIN ) ?>
			</label>
			<?php echo _e( 'Set the same password to protect the following pages and posts. Available in Pro version.', PPW_Constants::DOMAIN ) ?>
		</p>
	</td>
</tr>
<tr class="ppwp-free-pages-posts-set-password ppwp-hidden-password ppwp_free_version">
	<td></td>
	<td><p><?php echo esc_html__( 'Select your private pages or posts', PPW_Constants::DOMAIN ) ?></p>
		<select multiple="multiple" class="ppwp_select2">
			<?php foreach ( $all_page_post as $page ): ?>
				<option disabled="disabled"><?php echo esc_html( $page->post_title ) ?></option>
			<?php endforeach; ?>
		</select>
	</td>
</tr>
<tr class="ppwp-free-pages-posts-set-password ppwp-hidden-password ppwp_free_version">
	<td></td>
	<td class="ppwp_wrap_set_new_password_for_pages_posts">
		<p><?php echo esc_html__( 'Set a password', PPW_Constants::DOMAIN ) ?></p>
		<input type="text" placeholder="Enter a password"/>
	</td>
</tr>
