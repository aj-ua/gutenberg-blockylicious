<?php 
$block_wrapper_attributes = get_block_wrapper_attributes();
$image_uri = wp_get_attachment_image_url( $attributes['imageId'], 'thumbnail' ) ?? 0;
$image_uri_large = wp_get_attachment_image_url( $attributes['imageId'], 'large' ) ?? 0;
?>

<?php if ( $image_uri ) { ?>
    <div <?php echo $block_wrapper_attributes; ?>>
        <img data-large-size="<?php echo $image_uri_large; ?>" src="<?php echo $image_uri; ?>" alt="" class="thumb">
    </div>
<?php } ?>
