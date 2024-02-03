<?php 
    $block_wrapper_attributes = get_block_wrapper_attributes();
    if ($attributes['linkedPost'] ?? null) {
        $post_uri = get_permalink( $attributes['linkedPost'] );
    }
?>

<a <?php echo $block_wrapper_attributes; ?> href="<?php echo $post_uri ?? "#"; ?>">
    <?php echo $attributes['labelText']; ?>
</a>
